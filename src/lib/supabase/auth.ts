import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "./server";

/**
 * 認証チェック
 * @returns ユーザー情報
 */
const validateAuthWithRedirect = async () => {
  // 未認証であればredirect、 認証できればユーザー情報を返す
  // ユーザーを取得
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // 認証失敗: ユーザーが存在しない場合
  if (!user || !user.email) {
    redirect("/login");
  }
  return user;
};

// 認証チェックをキャッシュ
export const cachedValidateAuthWithRedirect = cache(validateAuthWithRedirect);
