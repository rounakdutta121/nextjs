const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyXi269euWvgvlhHZFS6tY2ievtZz8XbEvLu8OFw_9br_uBseJd6rL5yGBcV7CRYDb7/exec";

export const submitLeadForm = async (data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}) => {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "lead",
        ...data,
      }),
    });
    return { status: "success" };
  } catch (error) {
    console.error("Lead form submission error:", error);
    throw error;
  }
};

export const submitBrochureForm = async (data: {
  name: string;
  phone: string;
  email: string;
}) => {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "brochure",
        ...data,
      }),
    });
    return { status: "success" };
  } catch (error) {
    console.error("Brochure form submission error:", error);
    throw error;
  }
};
