# frozen_string_literal: true

class LiquidController < ApplicationController
  include VariantsFetcher

  def index
    uri = URI('https://gist.githubusercontent.com/billybonks/41ccddfb51293cd89a9d798bf2252d7a/raw/f97441467b7c9e8483197be2b3f106cbe456ab67/whatsapp_template.liquid')
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
      </script>
    </head>
    <body>
      <div>
        <button onclick='shareAction()'>Share</button>
      </div>
      <div id='shareable-content'>
        #{liquid_template}
      </div>
    </body>
    </html>"
  end
end
