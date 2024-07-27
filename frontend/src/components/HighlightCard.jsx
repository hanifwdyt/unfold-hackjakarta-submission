import { SalesInfo } from "./SalesInfo";
import { SalesDetails } from "./SalesDetails";

export const HighlightsCard = () => (
  <div className='grid grid-cols-1 divide-y shadow-lg rounded-lg border mt-4'>
    <SalesInfo />
    <SalesDetails />
  </div>
);