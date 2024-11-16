import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mail, Send, Building2, Phone } from 'lucide-react';

const formSchema = z.object({
  company: z.string().min(1, "会社名を入力してください"),
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().min(1, "電話番号を入力してください"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...data,
        }).toString(),
      });
      
      if (response.ok) {
        reset();
        alert("お問い合わせありがとうございます。内容を確認次第、ご連絡させていただきます。");
      }
    } catch (error) {
      alert("送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <form
      action="https://ssgform.com/s/Ds2kgXQ8mNIb"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto p-8 bg-base-100 rounded-lg shadow-xl"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div>
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <Building2 className="h-4 w-4 text-primary" />
            会社名
          </span>
        </label>
        <input
          {...register("company")}
          className="input input-bordered w-full"
          placeholder="株式会社〇〇"
        />
        {errors.company && (
          <p className="text-error text-sm mt-1">{errors.company.message}</p>
        )}
      </div>

      <div>
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            お名前
          </span>
        </label>
        <input
          {...register("name")}
          className="input input-bordered w-full"
          placeholder="山田 太郎"
        />
        {errors.name && (
          <p className="text-error text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            メールアドレス
          </span>
        </label>
        <input
          {...register("email")}
          type="email"
          className="input input-bordered w-full"
          placeholder="your-email@example.com"
        />
        {errors.email && (
          <p className="text-error text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            電話番号
          </span>
        </label>
        <input
          {...register("phone")}
          type="tel"
          className="input input-bordered w-full"
          placeholder="090-1234-5678"
        />
        {errors.phone && (
          <p className="text-error text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            お問い合わせ内容
          </span>
        </label>
        <textarea
          {...register("message")}
          className="textarea textarea-bordered w-full h-32"
          placeholder="お問い合わせ内容をご記入ください"
        />
        {errors.message && (
          <p className="text-error text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary"
      >
        {isSubmitting ? (
          <Mail className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Send className="mr-2 h-4 w-4" />
        )}
        送信する
      </Button>
    </form>
  );
}
