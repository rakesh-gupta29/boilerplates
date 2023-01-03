const activeConfig = "dev";

const appConfig = {
  dev: {
    appName: "Boilerplate",
    url: {
      api: "",
      assets: "",
      origin: "",
    },
    openGraph: {
      site_title: "NextJS Boilerplate",
      site_description: "NextJS bolierplate  with initail folder structure",
      type: "website",
      locale: "id_ID",
      url: "localhost://3000",
    },
  },
  prod: {
    appName: "",
    url: {
      api: "",
      assets: "",
      origin: "",
    },
    openGraph: {
      site_name: "",
      type: "",
      locale: "",
      url: "",
    },
  },
};

export default appConfig[activeConfig];
