const ExhibitionImageSmall = (props) => {
  const photoOneItem = props.photoOneItem
  console.log(photoOneItem)
  return(
    <div className=" m-2">
      <img src={photoOneItem.imagePath} className=" w-[224px] h-[300px] object-cover"/>
    </div>
  )
}
export default ExhibitionImageSmall;