import LandingPage from "@/components/LandingPage";

export const metadata = {
  title: process.env.SITE_NAME,
  description: 'Entry Page',
};

export default function Home() {
  return <div className=''><LandingPage/></div>;
}
