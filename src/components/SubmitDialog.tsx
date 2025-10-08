import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";

interface SubmitDialogProps {
  type: "mentor" | "volunteer";
  buttonText: string;
  buttonClassName?: string;
}

export default function SubmitDialog({ 
  type, 
  buttonText, 
  buttonClassName 
}: SubmitDialogProps) {
  const { t } = useTranslation();
  const isMentor = type === "mentor";
  const title = isMentor ? t('submitDialog.mentor.title') : t('submitDialog.volunteer.title');
  const description = isMentor
    ? t('submitDialog.mentor.description')
    : t('submitDialog.volunteer.description');
  const idSuffix = isMentor ? "" : "-vol";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor={`name${idSuffix}`}>{t('submitDialog.form.name')}</Label>
            <Input
              id={`name${idSuffix}`}
              placeholder={t('submitDialog.form.namePlaceholder')}
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`email${idSuffix}`}>{t('submitDialog.form.email')}</Label>
            <Input
              id={`email${idSuffix}`}
              type="email"
              placeholder={t('submitDialog.form.emailPlaceholder')}
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`phone${idSuffix}`}>{t('submitDialog.form.phone')}</Label>
            <Input
              id={`phone${idSuffix}`}
              type="tel"
              placeholder={t('submitDialog.form.phonePlaceholder')}
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
            {t('submitDialog.form.submit')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
