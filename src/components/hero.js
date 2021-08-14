import React from "react";
import Highlighter from "react-highlight-words";


const Hero = () => (
  <div className="text-center hero my-5">
   <Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={["risks", "opportunities"]}
    autoEscape={true}
    textToHighlight="Currently, however, investors, lenders, and insurers don’t have a clear view of which companies will endure or even flourish as the environment changes, regulations evolve, new technologies emerge, and customer behavior shifts — and which companies are likely to struggle.
    Without reliable climate-related financial information, financial markets cannot price climate-related risks and opportunities correctly and may potentially face a rocky transition to a low-carbon economy, with sudden value shifts and destabilizing costs if industries must rapidly adjust to the new landscape."
    className="lead"
  /> 
  </div>
);

export default Hero;
