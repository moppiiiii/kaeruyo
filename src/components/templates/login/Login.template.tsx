import BaseLayout from "@/components/layouts/base/Base.layout";
import { LoginTemplateProps } from "./type";

const LoginTemplate: React.FC<LoginTemplateProps> = ({ signInWithGoogle }) => {
  return (
    <BaseLayout isHideFooter={true}>
      <div className="grid min-h-screen place-items-center p-4">
        <div className="w-full max-w-md">
          <form action={signInWithGoogle}>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 text-sm shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Google でログインする
            </button>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default LoginTemplate;
