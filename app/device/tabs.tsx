"use client"
import TableComponent from "@/components/table";
import RectangleWithSubdivisions from "@/components/zone_view";
import SystemHealth from "@/components/system_health";
import GardenOverview from "@/components/overall_health";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const status = {
  pump: 'OK',
  battery: 'OK',
  solar: 'OK',
  temp: 'OK',
  tank: 'OK',
  zones: ['OK', 'Offline', 'OK', 'OK', 'Offline', 'OK', 'OK', 'OK'],
};

export default function TabComponent() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="garden_health" title="Garden Health">
          <Card>
            <CardBody>
                Overall Health
                <GardenOverview plantStatus="Healthy" tankLevel={0} />
                <br></br>
                Zone Humidity
                <RectangleWithSubdivisions />
                <br></br>
                System Health
                <SystemHealth status={status} />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="historical_data" title="Historical Data">
          <Card>
            <CardBody>
                <TableComponent />
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}