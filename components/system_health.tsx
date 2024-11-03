import React from 'react';

interface SystemHealthProps {
  status: {
    pump: string;
    battery: string;
    solar: string;
    temp: string;
    tank: string;
    zones: string[]; // Array of strings for each zone (1-8)
  };
}

const SystemHealth: React.FC<SystemHealthProps> = ({ status }) => {
  const systemComponents = [
    { label: 'Pump', value: status.pump },
    { label: 'Battery', value: status.battery },
    { label: 'Solar', value: status.solar },
    { label: 'Temperature', value: status.temp },
    { label: 'Tank', value: status.tank },
    ...status.zones.map((zoneStatus, index) => ({ label: `Zone ${index + 1}`, value: zoneStatus })),
  ];

  return (
    <div style={styles.wrapper}>
      {systemComponents.map((component, index) => (
        <div key={index} style={styles.box}>
          <div style={styles.label}>{component.label}</div>
          <div
            style={{
              ...styles.statusValue,
              backgroundColor: component.value === 'OK' ? '#17C964' : '#F21361', // Green for active, red for inactive
            }}
          >
            {component.value}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '16px',
    padding: '16px',
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #333', // Dark border for black theme
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Slightly darker shadow for black theme
    backgroundColor: '#000', // Black background
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #444', // Dark border on each box for subtle distinction
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
    backgroundColor: '#1A1A1A', // Dark gray for box background
    textAlign: 'center',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#E0E0E0', // Light gray for readability on dark background
    marginBottom: '8px',
  },
  statusValue: {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '4px',
    color: 'white', // White text color for status values
  },
};

export default SystemHealth;
