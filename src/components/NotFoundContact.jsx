import React from "react";

const NotFoundContact = () => {
  return (
    <div className="flex justify-center items-center h-[50vh] gap-4">
      <div>
        <img src="/public/Hands Contact.png" alt="Contact not found" />
      </div>
      <h3 className="text-white text-2xl font-semibold">No Contact Found</h3>
    </div>
  );
};

export default NotFoundContact;
