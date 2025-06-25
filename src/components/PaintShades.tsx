import React from 'react';
const PaintShades = () => {
//   const luxuryEmulsion = [
//     'Sporty Yellow', 'Yellow Choice', 'Mango Mood', 'Sunrise', 'Signal Red',
//     'Terracoatta', 'Copper Leaf', 'Brick Brown', 'Mehorrn', 'Mughal Green',
//     'Mehandi', 'Reval', 'Sapphire', 'Oxford Blue'
//   ];

const luxuryEmulsionColors = [
  { name: 'Sporty Yellow', code: '#FFD700' },
  { name: 'Yellow Choice', code: '#FFEA00' },
  { name: 'Mango Mood', code: '#FFA500' },
  { name: 'Sunrise', code: '#FF4500' },
  { name: 'Signal Red', code: '#C41E3A' },
  { name: 'Terracoatta', code: '#E2725B' },
  { name: 'Copper Leaf', code: '#B87333' },
  { name: 'Brick Brown', code: '#964B00' },
  { name: 'Mehorrn', code: '#552F2F' },      // assuming a dark brown/maroon
  { name: 'Mughal Green', code: '#006400' },
  { name: 'Mehandi', code: '#6E750E' },
  { name: 'Reval', code: '#7F00FF' },        // assuming violet
  { name: 'Sapphire', code: '#0F52BA' },
  { name: 'Oxford Blue', code: '#002147' }
];

const acrylicDistemperColors = [
  { name: 'Ivory', code: '#FFFFF0' },
  { name: 'Pale Cream', code: '#FFFACD' },
  { name: 'Candy', code: '#FFBCD9' },
  { name: 'Marrie Pink', code: '#FFC0CB' },
  { name: 'Daffodil', code: '#FFFF31' },
  { name: 'Rose Pink', code: '#FF66CC' },
  { name: 'Lemon Bright', code: '#FFF700' },
  { name: 'Jatpuri', code: '#EAA221' }, // assumption
  { name: 'Wild Lilac', code: '#B39EB5' },
  { name: 'Sky Blue', code: '#87CEEB' },
  { name: 'New Pastel Green', code: '#77DD77' },
  { name: 'CH Green', code: '#228B22' }, // assumption
  { name: 'Electric Blue', code: '#7DF9FF' },
  { name: 'Light Green', code: '#90EE90' },
  { name: 'Dark Blue', code: '#00008B' },
  { name: 'Aquamarine', code: '#7FFFD4' },
  { name: 'Deep Aquamarine', code: '#43B3AE' },
  { name: 'Coffee', code: '#6F4E37' },
  { name: 'Rust', code: '#B7410E' },
  { name: 'Signal Red', code: '#C41E3A' }
];

const bothAvailableColors = [
  { name: 'Liril', code: '#00FFAA' },            // inspired by the Liril soap green
  { name: 'Sporty Pink', code: '#FF69B4' },
  { name: 'Megnta', code: '#FF00FF' },           // assuming typo for 'Magenta'
  { name: 'Lemon Souffle', code: '#FFFACD' },
  { name: 'Nagpur Orange', code: '#FFA500' },
  { name: 'Jolly Holly', code: '#228B22' }       // holly green
];

const metalicEmulsionColors = [
  { name: '24 CARAT GOLD', code: '#FFD700' },
  { name: 'BRONZE', code: '#CD7F32' },
  { name: 'COPPER', code: '#B87333' },
  { name: 'SILVER', code: '#C0C0C0' },
  { name: 'CREATION RED', code: '#D2042D' },
  { name: 'PURPLE', code: '#800080' },
  { name: 'SPORTY YELLOW', code: '#FFD700' },
  { name: 'SIGNAL RED', code: '#C41E3A' },
  { name: 'NAGPUR ORANGE', code: '#FFA500' },
  { name: 'MEGENTA', code: '#FF00FF' },         // assuming typo for Magenta
  { name: 'LIRIL', code: '#00FFAA' },
  { name: 'DARK GREEN', code: '#006400' },
  { name: 'SPORTY PINK', code: '#FF69B4' },
  { name: 'OXFORD BLUE', code: '#002147' },
  { name: 'CRIMSON', code: '#DC143C' },
  { name: 'BLACK', code: '#000000' }
];


  const ShadeBox = ({ name, code }: { name: string, code:string }) => (
    <div className="flex flex-col items-center">
      <div style={{ backgroundColor: code }} className={`w-20 h-10 shadow-md rounded-sm mb-1`}></div>
      <div className="text-xs text-center w-20 break-words text-gray-500 font-Georgia font-medium">{name}</div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Luxury Emulsion */}
        <div>
          <h2 className="text-lg sm:text-xl font-medium font-Georgia bg-blue-900 text-white text-center py-1 mb-4">LUXURY EMULSION (INT./EXT.)</h2>
          <div className="grid grid-cols-2 gap-4">
            {luxuryEmulsionColors.map((item,i) => (
              <ShadeBox key={i} name={item.name} code={item.code}/>
            ))}
          </div>
          <p className="text-xs text-center mt-2 font-semibold text-gray-400">Also available in white.<br />Shades are shown for indication purpose only</p>
        </div>

        {/* Acrylic Distemper */}
        <div>
          <h2 className="text-lg sm:text-xl font-medium font-Georgia bg-green-700 text-white text-center py-1 mb-4">ACRYLIC DISTEMPER</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {acrylicDistemperColors.map((item,i) => (
              <ShadeBox key={i} name={item.name} code={item.code}/>
            ))}
          </div>
          <div className="bg-red-600 text-white text-center text-sm font-semibold mt-3 py-1">
            डिस्टेंपर और इमल्शन दोनों में उपलब्ध !
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
            {bothAvailableColors.map((item,i) => (
              <ShadeBox key={i} name={item.name} code={item.code}/>
            ))}
          </div>
        </div>

        {/* Metalic Emulsion */}
        <div>
          <h2 className="text-lg sm:text-xl font-medium font-Georgia bg-orange-600 text-white text-center py-1 mb-4">METALIC EMULSION</h2>
          <div className="flex flex-col items-center mb-4">
            <div className="w-full h-10 bg-yellow-400 border border-black mb-1"></div>
            <div className="text-sm font-semibold text-center">24 CARAT GOLD</div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {metalicEmulsionColors.slice(1).map((item,i) => (
              <ShadeBox key={i} name={item.name} code={item.code}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintShades;
