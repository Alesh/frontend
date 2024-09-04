import { PropsWithChildren } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { observer } from "mobx-react-lite";

type Props = PropsWithChildren<{ title?: string }>;
/// Карточки дашборда
const DashboardCard = observer(({ title, children }: Props) => {
  return (
    <Card className="w-80">
      {title && (
        <CardHeader>
          <h3 className="px-1 text-large">{title}</h3>
        </CardHeader>
      )}
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
});

export default DashboardCard;
