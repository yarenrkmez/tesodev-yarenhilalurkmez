/** Dependencies */
import React from 'react';

/** Constats */
import { ButtonText } from '../../assets/constants/ButtonText';

/** Components */
import Button from '../../components/Button/Button';
import ButtonCircle from '../../components/Button/ButtonCircle';
import ButtonGroup from '../../components/Button/ButtonGroup';

/** Style */
import '../ButtonsPage/Buttons.scss';

/** Icons */
import CloseIcon from '../../assets/icons/components/CoseIcon';
import HeartIcon from '../../assets/icons/components/HeartIcon';
import DownArrowIcon from '../../assets/icons/components/DownArrowIcon';
import SettingsIcon from '../../assets/icons/components/SettingsIcon';


type Props = {}

const ButtonsPage = ({ }: Props) => {

    const settingsIcon = () => {
        return (
            <div className="settings-icon">
                <SettingsIcon
                />
            </div>


        )
    }

    const closeIcon = (color?: string) => {
        return (
            <CloseIcon
                color={color}
            />
        )
    }

    const heartIcon = (color?: string) => {
        return (
            <HeartIcon
                color={color}
            />
        )
    }

    const downIcon = (color?: string) => {
        return (
            <DownArrowIcon
                color={color}
            />
        )
    }

    return (
        <div className="buttons-page-container">
            <h2>Default Buttons</h2>

            <div className='buttons-page-container__buttons-container'>
                <div>
                    <Button
                        title={ButtonText.primaryBtn}
                        variant="primary"
                    />

                    <Button
                        title={ButtonText.primaryBtn}
                        variant="primary"
                        icon={settingsIcon()}
                    />

                    <Button
                        variant="primary"
                        icon={settingsIcon()}
                    />
                </div>


                <div>
                    <Button
                        variant="variant"
                        title={ButtonText.variantBtn}
                    />

                    <Button
                        variant="variant"
                        title={ButtonText.variantBtn}
                        icon={settingsIcon()}
                    />

                    <Button
                        variant="variant"
                        icon={settingsIcon()}
                    />
                </div>


                <div>
                    <Button
                        title={ButtonText.secondaryBtn}
                        variant="secondary"
                    />

                    <Button
                        variant="secondary"
                        title={ButtonText.secondaryBtn}
                        icon={settingsIcon()}

                    />

                    <Button
                        icon={settingsIcon()}
                        variant="secondary"
                    />
                </div>


                <div>
                    <Button
                        variant="primaryBordered"
                        title={ButtonText.borderedPrimaryBtn}
                    />

                    <Button
                        variant="primaryBordered"
                        title={ButtonText.borderedPrimaryBtn}
                        icon={settingsIcon()}
                    />

                    <Button
                        variant="primaryBordered"
                        icon={settingsIcon()}
                    />

                </div>

                <div>
                    <Button
                        variant="defaultBordered"
                        title={ButtonText.borderedDefaultBtn}
                    />

                    <Button
                        variant="defaultBordered"
                        title={ButtonText.borderedDefaultBtn}
                        icon={settingsIcon()}

                    />

                    <Button
                        variant="defaultBordered"
                        icon={settingsIcon()}
                    />

                </div>

                <div>
                    <Button
                        variant="defaultSolid"
                        title={ButtonText.solidDefaultBtn}
                    />

                    <Button
                        variant="defaultSolid"
                        title={ButtonText.solidDefaultBtn}
                        icon={settingsIcon()}

                    />

                    <Button
                        variant="defaultSolid"
                        icon={settingsIcon()}
                    />

                </div>
                <div>
                    <Button
                        variant="primaryGhost"
                        title={ButtonText.ghostPrimaryBtn}
                    />

                    <Button
                        variant="primaryGhost"
                        title={ButtonText.ghostPrimaryBtn}
                        icon={settingsIcon()}
                    />

                    <Button
                        variant="primaryGhost"
                        icon={settingsIcon()}
                    />
                </div>
                <div>
                    <Button
                        variant="defaultGhost"
                        title={ButtonText.ghostDefaultBtn}
                    />

                    <Button
                        variant="defaultGhost"
                        title={ButtonText.ghostDefaultBtn}
                        icon={settingsIcon()}
                    />

                    <Button
                        variant="defaultGhost"
                        icon={settingsIcon()}
                    />
                </div>

                <div>
                    <Button
                        variant="success"
                        title={ButtonText.successBtn}
                    />
                </div>

                <div>
                    <Button
                        variant="danger"
                        title={ButtonText.danger}
                    />

                </div>


            </div>

            <h2>Small Buttons</h2>
            <div className='buttons-page-container__buttons-container'>
                <div>
                    <Button
                        title={ButtonText.primaryBtn}
                        variant="primary"
                        size="small"
                    />

                    <Button
                        title={ButtonText.primaryBtn}
                        variant="primary"
                        icon={settingsIcon()}
                        size="small"
                    />

                    <Button
                        variant="primary"
                        icon={settingsIcon()}
                        size="small"
                    />
                </div>


                <div>
                    <Button
                        variant="variant"
                        title={ButtonText.variantBtn}
                        size="small"
                    />

                    <Button
                        variant="variant"
                        title={ButtonText.variantBtn}
                        icon={settingsIcon()}
                        size="small"
                    />

                    <Button
                        variant="variant"
                        icon={settingsIcon()}
                        size="small"
                    />
                </div>


                <div>
                    <Button
                        title={ButtonText.secondaryBtn}
                        variant="secondary"
                        size="small"
                    />

                    <Button
                        variant="secondary"
                        title={ButtonText.secondaryBtn}
                        icon={settingsIcon()}
                        size="small"
                    />

                    <Button
                        icon={settingsIcon()}
                        variant="secondary"
                        size="small"
                    />
                </div>


                <div>
                    <Button
                        variant="primaryBordered"
                        title={ButtonText.borderedPrimaryBtn}
                        size="small"
                    />

                    <Button
                        variant="primaryBordered"
                        title={ButtonText.borderedPrimaryBtn}
                        icon={settingsIcon()}
                        size="small"
                    />

                    <Button
                        variant="primaryBordered"
                        icon={settingsIcon()}
                        size="small"
                    />

                </div>

                <div>
                    <Button
                        variant="defaultBordered"
                        title={ButtonText.borderedDefaultBtn}
                        size="small"
                    />

                    <Button
                        variant="defaultBordered"
                        title={ButtonText.borderedDefaultBtn}
                        icon={settingsIcon()}
                        size="small"
                    />

                    <Button
                        variant="defaultBordered"
                        icon={settingsIcon()}
                        size="small"
                    />

                </div>

                <div>
                    <Button
                        variant="defaultSolid"
                        title={ButtonText.solidDefaultBtn}
                        size="small"
                    />

                    <Button
                        variant="defaultSolid"
                        title={ButtonText.solidDefaultBtn}
                        icon={settingsIcon()}
                        size="small"
                    />

                    <Button
                        variant="defaultSolid"
                        icon={settingsIcon()}
                        size="small"
                    />

                </div>
                <div>
                    <Button
                        variant="primaryGhost"
                        title={ButtonText.ghostPrimaryBtn}
                        size="small"
                    />

                    <Button
                        variant="primaryGhost"
                        title={ButtonText.ghostPrimaryBtn}
                        icon={settingsIcon()}
                        size="small"
                    />

                    <Button
                        variant="primaryGhost"
                        icon={settingsIcon()}
                        size="small"
                    />
                </div>
                <div>
                    <Button
                        variant="defaultGhost"
                        title={ButtonText.ghostDefaultBtn}
                        size="small"
                    />

                    <Button
                        variant="defaultGhost"
                        title={ButtonText.ghostDefaultBtn}
                        icon={settingsIcon()}
                        size="small"
                    />

                    <Button
                        variant="defaultGhost"
                        icon={settingsIcon()}
                        size="small"
                    />
                </div>

                <div>
                    <Button
                        variant="success"
                        title={ButtonText.successBtn}
                        size="small"
                    />
                </div>

                <div>
                    <Button
                        variant="danger"
                        title={ButtonText.danger}
                        size="small"
                    />

                </div>


            </div>

            <h2>Circle Buttons</h2>
            <div className='buttons-page-container__buttons-container'>
                <ButtonCircle
                    icon={closeIcon('#666666')}
                />
                <ButtonCircle
                    icon={closeIcon('#666666')}
                />
            </div>

            <h2>Button Group</h2>
            <div className='buttons-page-container__buttons-container'>

                <ButtonGroup
                    title={ButtonText.addListBtn}
                    variant='addList'
                    icon={
                        heartIcon()

                    }
                    iconRight={
                        downIcon()
                    }
                    size="large"
                />

                <ButtonGroup
                    title={ButtonText.addListBtn}
                    variant='addList'
                    icon={
                        heartIcon()

                    }
                    iconRight={
                        downIcon()
                    }
                    size="small"
                />

                <ButtonGroup
                    title={ButtonText.likeBtn}
                    icon={
                        downIcon()

                    }
                    iconRight={
                        heartIcon()
                    }

                />

                <ButtonGroup
                    title={ButtonText.likeBtn}
                    icon={
                        downIcon()

                    }
                    iconRight={
                        heartIcon()
                    }
                    size="small"

                />

            </div>
        </div>
    )
}

export default ButtonsPage