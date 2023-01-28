import React from "react";
import { FormField } from "../components";

const CreatePost = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="fon-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] ext-[14px] max-w-[500px]] ">
          Generate an imaginative image tbrough DALL-E Ai and share it with the
          community
        </p>
      </div>
      <form>
        <FormField />
        <FormField />

      </form>
    </section>
  );
};

export default CreatePost;
