import { Modal } from '@/components/@modal';
import { Photo } from '@/components/photo';

type Props = {
  params: { id: string };
};

const page = ({ params: { id } }: Props) => {
  return (
    <div>
      <Modal>
        <Photo id={id} />
      </Modal>
    </div>
  );
};

export default page;
