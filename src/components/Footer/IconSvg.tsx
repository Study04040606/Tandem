type SvgIconProps = {
  icon: string,
  size: string
};

const IconSvg = ({icon, size}: SvgIconProps) => (
   <svg className={`mr-2 fill-neutral-700`} width={size} height={size} >
       <use href={`images/sprite.svg#icon-${icon}`} />
   </svg>
);

export default IconSvg;