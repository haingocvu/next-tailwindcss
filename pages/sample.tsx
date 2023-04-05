import Tag from '@app/shared/components/tag/Tag';
import { NextPageWithLayout } from '@app/shared/models/PageInterface';

const Sample: NextPageWithLayout = () => {
  return (
    <div className="px-4 py-8">
      <Tag>New</Tag>
    </div>
  );
};

export default Sample;

Sample.getLayout = (page) => page;
