"use client"
import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";

// Define the humidArr interface
interface humidArr {
  zone1: string;
  zone2: string;
  zone3: string;
  zone4: string;
  zone5: string;
  zone6: string;
  zone7: string;
  zone8: string;
  serial: string;
  timestamp: string;
}

export default function App() {
  const [page, setPage] = useState(1);
  const [devices, setDevices] = useState<humidArr[]>([]); // State for API data with humidArr type
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState<string | null>(null); // State for error handling
  const rowsPerPage = 4;

  const fetchDevices = async () => {
    try {
      const response = await fetch("/api/device");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: humidArr[] = await response.json();
      setDevices(data); // Set the devices from the API response
      setLoading(false);
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices(); // Fetch the data when the component mounts
  }, []);

  const pages = useMemo(() => Math.ceil(devices.length / rowsPerPage), [devices]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return devices.slice(start, end);
  }, [page, devices]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error handling
  }

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="serial">Serial</TableColumn>
        <TableColumn key="timestamp">Timestamp</TableColumn>
        <TableColumn key="zone1">Zone 1</TableColumn>
        <TableColumn key="zone2">Zone 2</TableColumn>
        <TableColumn key="zone3">Zone 3</TableColumn>
        <TableColumn key="zone4">Zone 4</TableColumn>
        <TableColumn key="zone5">Zone 5</TableColumn>
        <TableColumn key="zone6">Zone 6</TableColumn>
        <TableColumn key="zone7">Zone 7</TableColumn>
        <TableColumn key="zone8">Zone 8</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.serial}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
