import { Button } from 'shared/components/Button/Button';
import { BLACK20_HEX_COLOR, BLUE40_HEX_COLOR } from 'shared/constants/styles';
import { ToolsItems } from './Tools.data';
import { StyledToolsComponents as SC } from './Tools.styled';

export const Tools = () => {
  return (
    <SC.ToolsWrapper>
      <SC.Heading>Tools</SC.Heading>
      <SC.Ul>
        {ToolsItems.map(({ title, imageSource, isActive }) => (
          <SC.Li key={title} isActive={isActive}>
            <Button
              imgSource={imageSource}
              imgPosition='before'
              textColor={isActive ? BLUE40_HEX_COLOR : BLACK20_HEX_COLOR}
              transparentBg
            >
              {title}
            </Button>
          </SC.Li>
        ))}
      </SC.Ul>
    </SC.ToolsWrapper>
  );
};
