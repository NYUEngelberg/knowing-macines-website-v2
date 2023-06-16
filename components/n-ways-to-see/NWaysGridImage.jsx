import React from "react";
import NWaysGridImageOverlay from "./NWaysGridImageOverlay";

export default function NWaysGridImage({ item, apiURL, collection }) {
  const meta = item.labels.length > 0 && item.labels[0].meta;
  const text = item.texts.length > 0 && item.texts[0].text;
  return (
    <div className="aspect-square flex flex-col relative cursor-pointer group duration-700">
      <div
        className="w-full h-full bg-cover group-hover:opacity-100 duration-200"
        style={{
          backgroundImage: `url("${apiURL}/collections/${collection}/files/${item.files[0].id}")`,
        }}
      >
        <NWaysGridImageOverlay text={text} meta={meta} />
      </div>
    </div>
  );
}