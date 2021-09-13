const composeSchemas = ({
  showPage,
  showAddress,
  showPerson,
  showOrganization,
  showBreadcrumbs,
  schema: { page, address, person, organization, breadcrumbs },
}) => ({
  "@context": `http://schema.org`,
  "@graph": [
    showAddress && address,
    showPerson && person,
    showOrganization && organization,
    showBreadcrumbs && breadcrumbs,
    showPage && page,
  ].filter(Boolean),
})

export default composeSchemas
