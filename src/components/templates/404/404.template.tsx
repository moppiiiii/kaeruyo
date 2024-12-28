import BaseLayout from "../../layouts/BaseLayout.layout";

const NotFoundTemplate: React.FC = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col gap-4 justify-center items-center pt-10">
        <p className="text-6xl">404</p>
        <p className="text-lg">お探しのページは見つかりませんでした</p>
        <a href="/" title="トップページへ戻る">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            トップページへ戻る
          </button>
        </a>
      </div>
    </BaseLayout>
  );
};

export default NotFoundTemplate;
