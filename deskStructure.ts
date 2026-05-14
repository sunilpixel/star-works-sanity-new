export default function deskStructure(S: any) {
  return S.list()
    .title('Star Works CMS')
    .items([
      // ======================
      // HEADER
      // ======================
      S.listItem()
        .title('Header')
        .icon(() => '🧭')
        .child(S.document().schemaType('header').documentId('mainHeader')),

      S.divider(),

      // ======================
      // FOOTER
      // ======================
      S.listItem()
        .title('Footer')
        .icon(() => '🦶')
        .child(S.document().schemaType('footer').documentId('mainFooter')),

      S.divider(),

      // ======================
      // SERVICES PAGE
      // ======================

      S.listItem()
        .title('Services Page')
        .icon(() => '🚀')
        .child(S.document().schemaType('services').documentId('servicesPage')),

      S.divider(),

      // ======================
      // SERVICESDetails
      // ======================
      S.listItem()
        .title('Service Details')
        .icon(() => '⚡')
        .child(S.documentTypeList('serviceDetails').title('Service ')),
    ])
}
