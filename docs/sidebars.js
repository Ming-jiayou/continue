// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docsSidebar: [
    "introduction",
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "getting-started",
        },
      ],
    },
    {
      type: "category",
      label: "Chat",
      items: [
        {
          type: "autogenerated",
          dirName: "chat",
        },
      ],
    },
    {
      type: "category",
      label: "Autocomplete",
      items: [
        {
          type: "autogenerated",
          dirName: "autocomplete",
        },
      ],
    },
    {
      type: "category",
      label: "Edit",
      items: [
        {
          type: "autogenerated",
          dirName: "edit",
        },
      ],
    },
    {
      type: "category",
      label: "Actions",
      items: [
        {
          type: "autogenerated",
          dirName: "actions",
        },
      ],
    },
    "telemetry",
    "troubleshooting",
    {
      type: "link",
      label: "Customize",
      href: "/customize/overview",
    },
  ],
  customizingSidebar: [
    "customize/overview",
    {
      type: "category",
      label: "Model providers",
      collapsed: false,
      link: {
        slug: "/customize/model-providers",
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "customize/model-providers/top-level",
        },
        {
          type: "category",
          label: "More",
          link: {
            slug: "/customize/model-providers/more",
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "customize/model-providers/more",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Model types",
      link: {
        slug: "/customize/model-types",
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "customize/model-types",
        },
      ],
    },
    "customize/context-providers",
    "customize/slash-commands",
    "customize/tools",
    "customize/development-data",
    {
      type: "category",
      label: "Deep dives",
      items: [
        {
          type: "autogenerated",
          dirName: "customize/deep-dives",
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        {
          type: "autogenerated",
          dirName: "customize/tutorials",
        },
      ],
    },
    "customize/settings",
    {
      type: "link",
      label: "Reference",
      href: "/reference",
    },
    {
      type: "link",
      label: "JSON Reference",
      href: "/json-reference",
    },
    "customize/changelog",
    // {
    //   type: "link",
    //   label: "YAML Reference",
    //   href: "/yaml-reference",
    // },
    // {
    //   type: "link",
    //   label: "YAML Migration",
    //   href: "/yaml-migration",
    // },
  ],
};

module.exports = sidebars;
