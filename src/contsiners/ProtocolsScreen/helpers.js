export const filterSettingProtocol = (translater) => ({
  basic: [
    {
      value: "accepted",
      label: translater.protocolsPage.filterSettings.accepted,
    },
    {
      value: "rejected",
      label: translater.protocolsPage.filterSettings.rejected,
    },
    {
      value: "inDiscussion",
      label: translater.protocolsPage.filterSettings.inDiscussion,
    },
    {
      value: "all",
      label: translater.protocolsPage.filterSettings.all,
    },
  ],
  advanced: [
    {
      value: "title",
      label: translater.protocolsPage.filterSettings.title,
    },
    {
      value: "serialNumber",
      label: translater.protocolsPage.filterSettings.serialNumber,
    },
    {
      value: "createDate",
      label: translater.protocolsPage.filterSettings.createDate,
    },
  ],
});
