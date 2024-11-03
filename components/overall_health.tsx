import React from 'react';

interface GardenHealthProps {
  systemStatus: string; // Status text for the top box
  gardenStatus: string; // Status text for the bottom box
  systemColor?: string; // Background color for the top box
  gardenColor?: string; // Background color for the bottom box
}

const GardenHealth: React.FC<GardenHealthProps> = ({
  systemStatus,
  gardenStatus,
  systemColor = '#17C964', // Default to green for "healthy"
  gardenColor = '#F21361', // Default to red for "unhealthy"
}) => {
  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.box, backgroundColor: systemColor }}>
        <span style={styles.title}>Garden Status</span>
        <span style={styles.level}>{systemStatus}</span>
      </div>
      <div style={{ ...styles.box, backgroundColor: gardenColor }}>
        <span style={styles.title}>Tank Level</span>
        <span style={styles.level}>{gardenStatus}</span>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '200px', // Adjust height as needed
    borderRadius: '12px', // Rounded corners for a modern look
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Soft shadow
    overflow: 'hidden',
  },
  box: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column', // Stack title and level vertically
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Subtle border between boxes
    color: 'white', // White text for readability on colored backgrounds
    padding: '8px', // Padding for aesthetic spacing
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center', // Centers text horizontally within the container
  },
  level: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '4px', // Space between title and level
    textAlign: 'center', // Centers text horizontally within the container
  },
};

export default GardenHealth;
