import './Menu.css';
import MenuCard from '../menu-card/MenuCard';
// import SearchBar from '../../components/searchbar/searchBar';
import {useEffect,useState} from 'react';




function Menu() {

  const mockData = [
    { title: 'biryani', description: 'Description 1', image: 'https://img.freepik.com/free-photo/plate-biryani-with-bunch-food-it_505751-3819.jpg' },
    { title: 'karhai', description: 'Description 2', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8emluZ2VyJTIwYnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80' },
    { title: 'qeema', description: 'Description 2', image: 'https://img.freepik.com/premium-photo/chicken-shashlik-chicken-manchurian-with-salad-fried-rice-served-dish-isolated-grey-background-side-view-indian-pakistani-food_689047-3033.jpg?w=2000' },
    { title: 'quorma', description: 'Description 2', image: 'https://media.istockphoto.com/id/1389015478/photo/nihari-with-naan.jpg?s=612x612&w=0&k=20&c=YBmZlHo-cZxJ1FOsEwR0PR5SWNTKWbhw6VsOWi0REoM=' },
    { title: 'nihari', description: 'Description 2', image: 'https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?w=2000' },
    { title: 'pulao', description: 'Description 2', image: 'https://media.istockphoto.com/id/967274038/photo/homemade-chicken-tikka-masala.webp?b=1&s=170667a&w=0&k=20&c=8eSCPcx7Hx3ckeHtSlaCHW8rx2mRntHz5lXGx9-XZHU=' },
    { title: 'kabab', description: 'Description 2', image: 'https://www.verdictfoodservice.com/wp-content/uploads/sites/17/2023/04/Rudys-Pizza-Napoletana.jpg' },
    { title: 'bihari Boti', description: 'Description 2', image: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGthcmFoaXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' },
    { title: 'haleem', description: 'Description 2', image: 'https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg' },
  ];
  const [menuItems, setMenuItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = value => {
    setSearchValue(value);
  };
  useEffect(() => {
    

    // function filterByLetter(data) {
    //   return data.filter(
    //      (item) => item.title.includes('k') || item.title.includes('K')
    //     );
    // }
    const filteredData = mockData.filter(
      (item) => item.title.includes(searchValue) || item.title.includes(searchValue.toUpperCase())
     );

     console.log(filteredData);
    // const filteredData = filterByLetter(mockData);
    

    setMenuItems(filteredData);
  }, [searchValue]);


  return (
    <div className="Menu">
      <h1 style={{margin:"2rem 0rem"}}>
        Menu
      </h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
