import "./BurgerButton.css";

 const BurgerButton = ({ isChecked, onButtonClick }) => {
   return (
     <div className="burger-menu">
       <input
         type="checkbox"
         id="menu_checkbox"
         onClick={onButtonClick}
         value={isChecked}
       />
       <label htmlFor="menu_checkbox">
         <div></div>
         <div></div>
         <div></div>
       </label>
     </div>
   );
 };

export default BurgerButton;
