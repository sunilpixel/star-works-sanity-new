export default function deskStructure(S: any) {
  return S.list()
    .title("Star Works CMS")
    .items([
      // ======================
      // HEADER
      // ======================
      S.listItem()
        .title("Header")
        .icon(() => "🧭")
        .child(S.document().schemaType("header").documentId("mainHeader")),

      S.divider(),

      // ======================
      // FOOTER
      // ======================
      S.listItem()
        .title("Footer")
        .icon(() => "🦶")
        .child(S.document().schemaType("footer").documentId("mainFooter")),

      S.divider(),

      // ======================
      // SERVICES
      // ======================
      S.listItem()
        .title("Services")
        .icon(() => "⚡")
        .child(S.documentTypeList("service").title("Services")),
    ]);
}
