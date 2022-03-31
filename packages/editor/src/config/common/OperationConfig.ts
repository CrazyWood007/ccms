import { FieldConfigs } from "ccms/dist/src/components/formFields";

const config: FieldConfigs[] = [
  {
    "field": "type",
    "label": "type",
    "type": "hidden",
    "defaultValue": {
      "source": "static",
      "value": "ccms"
    }
  },
  {
    "field": "page",
    "label": "目标页面",
    "type": "tree_select",
    "treeData": {
      "from": "interface",
      "interface": {
        "url": "/api/menu/${applicationName}/all${businessSuffix}",
        "urlParams": [
          {
            "field": "applicationName",
            "data": {
              "source": "source",
              "field": "applicationName"
            }
          },
          {
            "field": "businessSuffix",
            "data": {
              "source": "source",
              "field": "businessSuffix"
            }
          }
        ],
        "method": "GET",
        "withCredentials": true,
        "response": {
          "root": "rs"
        },
        "condition": {
          "enable": true,
          "field": "code",
          "value": 1000,
          "success": {
            "type": "none"
          },
          "fail": {
            "type": "modal",
            "content": {
              "type": "field",
              "field": "msg"
            }
          }
        }
      },
      "format": {
        "type": "list",
        "keyField": "menuId",
        "titleField": "menuName",
        "childrenField": "children"
      }
    }
  },
  {
    "field": "params",
    "label": "参数传递",
    "type": "form",
    "primaryField": "field",
    "fields": [
      {
        "field": "field",
        "label": "字段名",
        "type": "text"
      },
      {
        "field": "data",
        "label": "",
        "type": "import_subform",
        "interface": {
          "url": "/ccms/config/${version}/${subversion}/common/ParamConfig.json",
          "urlParams": [
            {
              "field": "version",
              "data": {
                "source": "source",
                "field": "version"
              }
            },
            {
              "field": "subversion",
              "data": {
                "source": "source",
                "field": "subversion"
              }
            }
          ],
          "method": 'GET',
          "cache": {
            "global": "CCMS_CONFIG_common_ParamConfig"
          }
        }
      }
    ],
    "canInsert": true,
    "canRemove": true,
    "canSort": true,
    "canCollapse": true
  },
  {
    "field": "mode",
    "label": "操作形式",
    "type": "select_single",
    "mode": "button",
    "options": {
      "from": "manual",
      "data": [
        {
          "value": "popup",
          "label": "模态窗口"
        },
        {
          "value": "redirect",
          "label": "重定向"
        },
        {
          "value": "window",
          "label": "新标签页"
        },
        {
          "value": "invisible",
          "label": "无界面"
        }
      ]
    }
  },
  {
    "field": "label",
    "label": "窗口标题",
    "type": "text",
    "condition": {
      "template": "${mode} === 'popup'",
      "params": [
        {
          "field": "mode",
          "data": {
            "source": "record",
            "field": "mode"
          }
        }
      ]
    }
  }
]

export default config