import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

/// Дашборд
const DashboardView = () => {
  return (
    <section className="flex flex-row flex-wrap gap-2">
      <Card className="w-80">
        <CardHeader>
          <h3 className="text-large">Добавление источника</h3>
        </CardHeader>
        <CardBody>
          <p className="text-small">
            Для отображение итформации в терминале необходимо подключить источник данных. Нажмите кпопку
            &ldquo;Добавить&rdquo;
          </p>
        </CardBody>
        <CardFooter>
          <Button color="primary" variant="flat">
            Добавить
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default DashboardView;
