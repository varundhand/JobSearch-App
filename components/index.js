// we create an index.js file for major folders and import all the components in it, which can be furthere exported and used later

import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";
import LinkBtn from "./jobdetails/linkBtn/LinkBtn";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";

export {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
  LinkBtn
};
