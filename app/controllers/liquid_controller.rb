# frozen_string_literal: true

class LiquidController < ApplicationController
  include VariantsFetcher

  def index
    uri = URI(Template.find(params[:template_id]).url)
    template_string = Net::HTTP.get(uri)
    template = Liquid::Template.parse(template_string)
    
    context = {
      variants: variants.map { |v| v.to_h.stringify_keys }
    }

    render inline: full_template(template.render(context.stringify_keys))
  end

  def full_template(liquid_template)
    "<html>
    <head>
      <script>
        async function shareAction() {
          const shareableText = document.getElementById('shareable-content').innerText;
          const shareData = {
            text: shareableText,
          }
          await navigator.share(shareData);
        }
        function checkShareApi() {
          const buttonContainer = document.getElementById('shareButtonContainer');
          if(navigator.share) {
            buttonContainer.style.display = 'block';
          }
        }
      </script>
      <style type='text/css'>
        button {
          display: inline-block;
          font-weight: 400;
          text-align: center;
          vertical-align: middle;
          user-select: none;
          border: 1px solid transparent;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
          border-radius: 3px;
          color: #ffffff;
          background-color: #6c757d;
          border-color: #6c757d;
          cursor: pointer;
        }
      </style>
    </head>
    <body onload='checkShareApi()'>
      <div style='padding:  15px 0; margin-bottom: 15px; border-bottom: 1px solid lightgrey; display: none' id='shareButtonContainer'>
        <button onclick='shareAction()'>Share</button>
      </div>
      <div id='shareable-content'>
        #{liquid_template}
      </div>
    </body>
    </html>"
  end
end
