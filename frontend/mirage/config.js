export default function() {
  this.namespace = '/api';

  this.get('/users/current', () => {
    return {
      "user": {
        "id": 1,
        "created_at": "2018-03-14T03:10:40.575Z",
        "updated_at": "2018-03-15T08:36:49.180Z",
        "action_items_email": "weekly",
        "billing_contact": true,
        "pending_billing_contact": false,
        "email": "abdulla@tradegecko.com",
        "first_name": "abdulla",
        "integration_email": null,
        "last_name": "Gecko",
        "last_sign_in_at": "2018-09-05T03:09:15.899Z",
        "location": null,
        "login_id": 1,
        "mobile": null,
        "notification_email": true,
        "permissions": [
          "read_reports",
          "write_stocks",
          "write_orders",
          "write_products",
          "write_settings",
          "write_companies",
          "read_buy_prices"
        ],
        "phone_number": null,
        "position": null,
        "sales_report_email": true,
        "status": "active",
        "account_id": 4,
        "account_name": "Bob's Burgers"
      }
    }
  });

  this.get('/variants', () => {
    return {
      "variants":[
        {
          "id":332,
          "created_at":"2018-04-17T05:02:12.092Z",
          "updated_at":"2018-07-11T08:11:54.582Z",
          "product_id":116,
          "default_ledger_account_id":null,
          "buy_price":"3.0",
          "committed_stock":"0",
          "composite":false,
          "packsize":false,
          "description":null,
          "incoming_stock":"299",
          "is_online":false,
          "keep_selling":false,
          "last_cost_price":"3.0",
          "manage_stock":true,
          "max_online":null,
          "moving_average_cost":"6.9706",
          "name":"Small Thing",
          "online_ordering":true,
          "opt1":"small",
          "opt2":null,
          "opt3":null,
          "position":1,
          "product_name":"Cake",
          "product_status":"active",
          "product_type":null,
          "purchasable":true,
          "retail_price":"3.0",
          "sellable":true,
          "sku":"SMALLTHING",
          "status":"active",
          "stock_on_hand":"2448",
          "supplier_code":null,
          "taxable":true,
          "upc":null,
          "weight":"g",
          "weight_unit":"g",
          "weight_value":null,
          "wholesale_price":null,
          "moq":0,
          "stock_batchable":false,
          "country_of_origin":null,
          "hs_code":null,
          "image_ids":[

          ],
          "variant_prices":[
            {
              "price_list_id":"retail",
              "value":"3.0"
            },
            {
              "price_list_id":"buy",
              "value":"3.0"
            }
          ],
          "locations":[
            {
              "location_id":1,
              "bin_location":null,
              "reorder_point":null,
              "stock_on_hand":"2448",
              "committed":0,
              "incoming":"299"
            }
          ],
          "prices":{
            "retail":"3.0",
            "buy":"3.0"
          },
          "stock_levels":{
            "1":"2448.0"
          },
          "committed_stock_levels":{

          }
        },
        {
          "id":315,
          "created_at":"2018-04-17T04:42:12.856Z",
          "updated_at":"2018-07-11T08:11:54.590Z",
          "product_id":107,
          "default_ledger_account_id":null,
          "buy_price":"6.0",
          "committed_stock":"0",
          "composite":false,
          "packsize":false,
          "description":null,
          "incoming_stock":"300",
          "is_online":false,
          "keep_selling":false,
          "last_cost_price":"6.0",
          "manage_stock":true,
          "max_online":null,
          "moving_average_cost":"19.5",
          "name":"Large Thing",
          "online_ordering":true,
          "opt1":"large",
          "opt2":null,
          "opt3":null,
          "position":2,
          "product_name":"Balls",
          "product_status":"active",
          "product_type":null,
          "purchasable":true,
          "retail_price":null,
          "sellable":true,
          "sku":"LARGETHING",
          "status":"active",
          "stock_on_hand":"246",
          "supplier_code":null,
          "taxable":true,
          "upc":null,
          "weight":"g",
          "weight_unit":"g",
          "weight_value":null,
          "wholesale_price":null,
          "moq":0,
          "stock_batchable":false,
          "country_of_origin":null,
          "hs_code":null,
          "image_ids":[

          ],
          "variant_prices":[
            {
              "price_list_id":"buy",
              "value":"6.0"
            }
          ],
          "locations":[
            {
              "location_id":1,
              "bin_location":null,
              "reorder_point":null,
              "stock_on_hand":"246",
              "committed":0,
              "incoming":"300"
            }
          ],
          "prices":{
            "buy":"6.0"
          },
          "stock_levels":{
            "1":"246.0"
          },
          "committed_stock_levels":{

          }
        },
        {
          "id":314,
          "created_at":"2018-04-17T04:42:12.755Z",
          "updated_at":"2018-07-11T08:11:54.719Z",
          "product_id":107,
          "default_ledger_account_id":null,
          "buy_price":"4.0",
          "committed_stock":"0",
          "composite":false,
          "packsize":false,
          "description":null,
          "incoming_stock":"100",
          "is_online":false,
          "keep_selling":false,
          "last_cost_price":"4.0",
          "manage_stock":true,
          "max_online":null,
          "moving_average_cost":"4.7785",
          "name":"Medium thing",
          "online_ordering":true,
          "opt1":"small",
          "opt2":null,
          "opt3":null,
          "position":1,
          "product_name":"Balls",
          "product_status":"active",
          "product_type":null,
          "purchasable":true,
          "retail_price":"4.0",
          "sellable":true,
          "sku":"MEDIUMTHING",
          "status":"active",
          "stock_on_hand":"447",
          "supplier_code":null,
          "taxable":true,
          "upc":null,
          "weight":"g",
          "weight_unit":"g",
          "weight_value":null,
          "wholesale_price":null,
          "moq":0,
          "stock_batchable":false,
          "country_of_origin":null,
          "hs_code":null,
          "image_ids":[

          ],
          "variant_prices":[
            {
              "price_list_id":"retail",
              "value":"4.0"
            },
            {
              "price_list_id":"buy",
              "value":"4.0"
            }
          ],
          "locations":[
            {
              "location_id":1,
              "bin_location":null,
              "reorder_point":null,
              "stock_on_hand":"447",
              "committed":0,
              "incoming":"100"
            }
          ],
          "prices":{
            "retail":"4.0",
            "buy":"4.0"
          },
          "stock_levels":{
            "1":"447.0"
          },
          "committed_stock_levels":{

          }
        }
      ]
    }
  });
}
