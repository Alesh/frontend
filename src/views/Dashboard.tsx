import { Card, CardBody } from "@nextui-org/card";

/// Дашборд
const Dashboard = () => {
  return (
    <section className="grid grid-cols-2 gap-6">
      <Card>
        <CardBody>
          DASHBOARD#1 <br />
          DASHBOARD#1 <br />
          DASHBOARD#1 <br />
          DASHBOARD#1 <br />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          DASHBOARD#2 <br />
          DASHBOARD#2 <br />
          DASHBOARD#2 <br />
          DASHBOARD#2 <br />
        </CardBody>
      </Card>
    </section>
  );
};

export default Dashboard;
