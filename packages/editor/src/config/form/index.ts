import { FieldConfigs } from "ccms/dist/src/components/formFields";

const config: FieldConfigs[] = [
  {
    "field": "type",
    "label": "字段类型",
    "type": "select_single",
    "mode": "dropdown",
    "canClear": true,
    "options": {
      "from": "manual",
      "data": [
        {
          "value": "text",
          "label": "短文本"
        },
        {
          "value": "longtext",
          "label": "长文本"
        },
        {
          "value": "multiple_text",
          "label": "文本列表"
        },
        {
          "value": "number",
          "label": "数值"
        },
        {
          "value": "select_single",
          "label": "单项选择"
        },
        {
          "value": "select_multiple",
          "label": "多项选择"
        },
        {
          "value": "switch",
          "label": "布尔值"
        },
        {
          "value": "datetime",
          "label": "时间日期"
        },
        {
          "value": "datetimeRange",
          "label": "时间日期范围"
        },
        {
          "value": "tree_select",
          "label": "树形选框"
        },
        {
          "value": "color",
          "label": "取色器"
        },
        {
          "value": "upload",
          "label": "文件上传"
        },
        {
          "value": "form",
          "label": "子表单列表"
        },
        {
          "value": "group",
          "label": "群组"
        },
        {
          "value": "tabs",
          "label": "Tabs"
        },
        {
          "value": "hidden",
          "label": "隐藏传值"
        },
        {
          "value": "import_subform",
          "label": "动态加载子表单"
        },
        {
          "value": "custom",
          "label": "自定义组件"
        },
        {
          "value": "desc",
          "label": "表单提示文案"
        },
        {
          "value": "code",
        "label": "代码编辑器"
        },
        {
          "value": "diffcode",
        "label": "代码diff编辑器"
        }
      ]
    }
  }, 

  {
    "field": "columns.enable",
    "label": "分栏配置",
    "type": "switch"
  },
  {
    "field": "columns",
    "label": "分栏配置",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/common/ColumnsConfig.json",
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
        "global": "CCMS_CONFIG_common_ColumnsConfig"
      }
    },
    "condition": {
      "template": "${enable} === true",
      "params": [
        {
          "field": "enable",
          "data": {
            "source": "record",
            "field": "columns.enable"
          }
        }
      ]
    }
  },
  {
    "field": "columns.gap",
    "label": "分栏边距",
    "type": "number",
    "defaultValue": {
      "source": "static",
      "value": 32
    },
    "condition": {
      "template": "${enable} === true",
      "params": [
        {
          "field": "enable",
          "data": {
            "source": "record",
            "field": "columns.enable"
          }
        }
      ]
    }
  },
  {
    "field": "columns.rowGap",
    "label": "分栏下边距",
    "type": "number",
    "defaultValue": {
      "source": "static",
      "value": 0
    },
    "condition": {
      "template": "${enable} === true",
      "params": [
        {
          "field": "enable",
          "data": {
            "source": "record",
            "field": "columns.enable"
          }
        }
      ]
    }
  },
  {
    "field": "childColumns",
    "label": "子项分栏",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/common/ColumnsConfig.json",
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
        "global": "CCMS_CONFIG_common_ColumnsConfig"
      }
    },
    "condition": {
      "template": "${type} === 'group' || ${type} === 'import_subform'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "label": "提示文案",
    "field": "extra",
    "type": "group",
    "fields": [
      {
        "label": "文案",
        "field": "statement",
        "type": "text"
      },
      {
        "label": "参数",
        "field": "params",
        "type": "form",
        "primaryField": "field",
        "fields": [
          {
            "label": "字段名",
            "field": "field",
            "type": "text"
          },
          {
            "label": "数据来源",
            "field": "data",
            "type": "import_subform",
            "interface": {
              "url": "https://storage.jd.com/swm-plus/beta-floor-fields/config/common/ParamConfig.json?v=211222",
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
              "method": "GET",
              "cache": {
                "global": "CCMS_CONFIG_common_ParamConfig"
              }
            }
          }
        ],
        "canInsert": true,
        "canRemove": true,
        "canCollapse": true,
        "canSort": true
      }
    ]
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/text.json",
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
        "global": "CCMS_CONFIG_form_text"
      }
    },
    "condition": {
      "template": "${type} === 'text'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/longtext.json",
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
        "global": "CCMS_CONFIG_form_longtext"
      }
    },
    "condition": {
      "template": "${type} === 'longtext'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/multiple_text.json",
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
        "global": "CCMS_CONFIG_form_multiple_text"
      }
    },
    "condition": {
      "template": "${type} === 'multiple_text'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/number.json",
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
        "global": "CCMS_CONFIG_form_number"
      }
    },
    "condition": {
      "template": "${type} === 'number'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/select_single.json",
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
        "global": "CCMS_CONFIG_form_select_single"
      }
    },
    "condition": {
      "template": "${type} === 'select_single'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/select_multiple.json",
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
        "global": "CCMS_CONFIG_form_select_multiple"
      }
    },
    "condition": {
      "template": "${type} === 'select_multiple'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/switch.json",
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
        "global": "CCMS_CONFIG_form_switch"
      }
    },
    "condition": {
      "template": "${type} === 'switch'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/datetime.json",
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
        "global": "CCMS_CONFIG_form_datetime"
      }
    },
    "condition": {
      "template": "${type} === 'datetime'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/datetimeRange.json",
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
        "global": "CCMS_CONFIG_form_datetimeRange"
      }
    },
    "condition": {
      "template": "${type} === 'datetimeRange'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/tree_select.json",
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
        "global": "CCMS_CONFIG_form_tree_select"
      }
    },
    "condition": {
      "template": "${type} === 'tree_select'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/upload.json",
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
        "global": "CCMS_CONFIG_form_upload"
      }
    },
    "condition": {
      "template": "${type} === 'upload'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/list.json",
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
        "global": "CCMS_CONFIG_form_list"
      }
    },
    "condition": {
      "template": "${type} === 'form'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/group.json",
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
        "global": "CCMS_CONFIG_form_group"
      }
    },
    "condition": {
      "template": "${type} === 'group'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/tabs.json",
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
        "global": "CCMS_CONFIG_form_tabs"
      }
    },
    "condition": {
      "template": "${type} === 'tabs'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/import_subform.json",
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
        "global": "CCMS_CONFIG_form_import_subform"
      }
    },
    "condition": {
      "template": "${type} === 'import_subform'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/custom.json",
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
        "global": "CCMS_CONFIG_form_custom"
      }
    },
    "condition": {
      "template": "${type} === 'custom'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/desc.json",
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
        "global": "CCMS_CONFIG_form_desc"
      }
    },
    "condition": {
      "template": "${type} === 'desc'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/code.json",
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
        "global": "CCMS_CONFIG_form_code"
      }
    },
    "condition": {
      "template": "${type} === 'code'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "",
    "label": "",
    "type": "import_subform",
    "interface": {
      "url": "/ccms/config/${version}/${subversion}/form/diffCode.json",
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
        "global": "CCMS_CONFIG_form_diffCode"
      }
    },
    "condition": {
      "template": "${type} === 'diffcode'",
      "params": [
        {
          "field": "type",
          "data": {
            "source": "record",
            "field": "type"
          }
        }
      ]
    }
  },
  {
    "field": "defaultValue",
    "label": "默认值",
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
  },
  {
    "field": "",
    "label": "其他配置",
    "type": "group",
    "fields": [
      {
        "field": "required",
        "label": "必填",
        "type": "switch"
      },
      {
        "field": "readonly",
        "label": "只读",
        "type": "switch"
      },
      {
        "field": "disabled",
        "label": "禁用",
        "type": "switch"
      },
      {
        "field": "condition",
        "label": "展示条件",
        "type": "import_subform",
        "interface": {
          "url": "/ccms/config/${version}/${subversion}/common/ConditionConfig.json",
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
            "global": "CCMS_CONFIG_common_ConditionConfig"
          }
        }
      }
    ]
  }
]

export default config