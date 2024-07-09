export default function PageSection({styles, children}){
return(
    <button className={`p-3 text-left text-body-l rounded-r-full focus:bg-main-purple hover:bg-main-purple hover:text-white focus:text-white mr-3 ${styles}`}>{children}</button>
);
}