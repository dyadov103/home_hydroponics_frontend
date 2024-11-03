import React from 'react';

const RectangleWithSubdivisions: React.FC = () => {
  const rows = Array.from({ length: 2 }, (_, index) => index);
  const columns = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div style={styles.wrapper}>
      {rows.map((rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {columns.map((colIndex) => (
            <div
              key={colIndex}
              style={{
                ...styles.subdivision,
                backgroundColor: (rowIndex === 0 || rowIndex === 1) && colIndex === 0 ? '#000' : getPresetColor(),
                color: (rowIndex === 0 || rowIndex === 1) && colIndex === 0 ? '#FFF' : '#333',
              }}
            >
              {(rowIndex === 0 || rowIndex === 1) && colIndex === 0 && (
                <span style={styles.largeX}>X</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Function to select a preset color randomly for non-X boxes
const getPresetColor = () => {
  const colors = ['#0072F5', '#17C964', '#F5A623']; // NextUI blue, green, and orange
  return colors[Math.floor(Math.random() * colors.length)];
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    border: '1px solid #E0E0E0', // Light border
    boxSizing: 'border-box',
    borderRadius: '12px', // Rounded corners for NextUI look
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow
    overflow: 'hidden',
  },
  row: {
    display: 'flex',
    flex: 1,
  },
  subdivision: {
    flex: 1,
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transitions
  },
  largeX: {
    fontSize: '6vw', // Adjusted to fit NextUI styling
    fontWeight: 'bold',
  },
};

export default RectangleWithSubdivisions;
