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
      //      HOMEPAGE
      // ======================

      S.listItem()
        .title('Hompage')
        .icon(() => '🏠')
        .child(S.document().schemaType('homepage').documentId('homepage')),

      S.divider(),

      // ======================
      // SERVICES PAGE
      // ======================

      S.listItem()
        .title('Services Page')
        .icon(() => '🚀')
        .child(S.document().schemaType('services').documentId('servicesage')),

      S.divider(),

      // ======================
      // SERVICESDetails
      // ======================
      S.listItem()
        .title('Service Details')
        .icon(() => '⚡')
        .child(S.documentTypeList('serviceDetails').title('Service ')),

      S.divider(),

      // ======================
      // ABOUT US PAGE
      // ======================
      S.listItem()
        .title('About Us Page')
        .icon(() => '⚡')
        .child(S.document().schemaType('aboutUs').documentId('AboutUsPage')),
    ])
}
