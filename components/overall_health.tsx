import React from 'react';

interface GardenOverviewProps {
  plantStatus: 'Healthy' | 'Unhealthy'; // Plant health status
  tankLevel: number; // Tank level percentage (0-100)
}

const GardenOverview: React.FC<GardenOverviewProps> = ({ plantStatus, tankLevel }) => {
  // Determine background color for plant status
  const plantColor = plantStatus === 'Healthy' ? '#17C964' : '#F21361'; // Green for healthy, red for unhealthy

  // Determine tank color based on percentage, adjusting to a readable range
  const tankColor = tankLevel > 50 
    ? `hsl(${Math.floor(120 * (tankLevel / 100))}, 80%, 40%)` // Green-ish at higher levels
    : `hsl(${Math.floor(120 * (tankLevel / 100))}, 100%, 45%)`; // Red-ish at lower levels

  // Determine text color based on tank level for better contrast
  const textColor = tankLevel > 50 ? '#FFF' : '#333'; // White text for high levels, dark text for low

  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.section, backgroundColor: plantColor }}>
        <span style={styles.title}>Plant Status</span>
        <span style={styles.value}>{plantStatus}</span>
      </div>
      <div style={{ ...styles.section, backgroundColor: tankColor, color: textColor }}>
        <span style={styles.title}>Tank Level</span>
        <span style={styles.value}>{tankLevel}%</span>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: 'flex', // Arrange sections side by side
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '400px', // Limit width for a pleasant card size
    height: '150px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#1A1A1A',
    overflow: 'hidden',
    padding: '8px',
    gap: '16px',
  },
  section: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column', // Stack title and value vertically
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    color: 'white', // Default text color for readability
    padding: '12px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '4px',
    textAlign: 'center',
  },
  value: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default GardenOverview;
