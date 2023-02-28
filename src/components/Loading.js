import React, { memo } from "react";

const Loading = () => {
  return (
    <section className="h-auto">
      <h1 className="m-0 absolute text-2xl text-white top-[50%] left-[48%]">
        Loading ...
      </h1>
    </section>
  );
};

export default memo(Loading);
