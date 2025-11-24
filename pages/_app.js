import React from 'react';
// Import global styles
import '../components/general/page.css';
import '../components/general/contactcards.css';
import '../components/general/expandablecards.css';
import '../components/general/pdf-viewer.css'; // Added global PDF viewer styles
import '../components/navbar/StaggeredMenu.css';
import '../components/general/footer/footer.css';
import '../components/general/ImageCarousel.css'; // Added ImageCarousel styles

// Import Splash/Home
import '../components/splashpage/intropage.css';
import '../components/10/banner/banner.css';
import '../components/10/homepage/homepage.css';

// Import People Page Styles
import '../components/people/associates/associates.css';
import '../components/people/committees/committees.css';
import '../components/people/court/court.css';
import '../components/people/divisionaladvisors/divisionaladvisors.css';
import '../components/people/fellows/fellows.css';
import '../components/people/mcministry/mcministry.css';
import '../components/people/mcmurtryaffinitygroups/mcmurtryaffinitygroups.css';
import '../components/people/mcteam/mcteam.css';
import '../components/people/paas/paas.css';
import '../components/people/smr/smr.css';
import '../components/people/wellbeing/wellbeing.css';

// Import Resources Page Styles
import '../components/resources/blm/blm.css';
import '../components/resources/coronavirus/coronavirus.css';
import '../components/resources/diversityResources/diversityResources.css';
import '../components/resources/documents/documents.css';
import '../components/resources/equipmentrequest/equipmentrequest.css';
import '../components/resources/expenseforms/expenseforms.css';
import '../components/resources/feedbackform/feedbackform.css';
import '../components/resources/initiativerequest/initiativerequest.css';
import '../components/resources/mcmurtryresources/mcmresources.css';
import '../components/resources/mis/mis.css';
import '../components/resources/roomreservations/roomreservations.css';
import '../components/resources/workorder/workorder.css';

// Import O-Week Styles
import '../components/oweek/oweek.css';
import '../components/oweek/groups/groups.css';
import '../components/oweek/navbar/navbar.css';

// Import About/Events Styles
import '../components/about/about/about.css';
import '../components/about/financial_inclusivity/financial_inclusivity.css';
import '../components/events/artevents/artevents.css';
import '../components/events/events/events.css';
import '../components/events/CustomCalendar.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}