import { NewsletterForm } from "../sections/NewsletterForm";
import { MenuItemsFooter } from "./MenuItemsFooter";

export const Footer = () => {
  return (
    <footer className="py-5 px-5 bg-white container">
      <div className="row">
        <MenuItemsFooter />
        <MenuItemsFooter />
        <MenuItemsFooter />
        <NewsletterForm />
      </div>
    </footer>
  );
};
