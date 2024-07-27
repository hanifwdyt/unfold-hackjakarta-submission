import { HighlightHeader } from './HighlightHeader';
import { HighlightsCard } from './HighlightCard';
import { Location } from './Location';

export default function Profile() {
  return (
    <div className='px-3'>
      <Location />
      <div className='flex flex-col'>
        <HighlightHeader />
        <HighlightsCard />
      </div>
    </div>
  );
}
