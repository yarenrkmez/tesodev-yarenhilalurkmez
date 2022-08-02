/** Dependencies */
import React from 'react'
import { ButtonText } from '../../assets/constants/ButtonText';
import SettingsIcon from '../../assets/icons/components/SettingsIcon';
import Button from '../../components/Button/Button';

/** Style */
import '../ButtonsPage/Buttons.scss';

/** Icons */
import CloseIcon from '../../assets/icons/components/CoseIcon';
import ButtonCircle from '../../components/Button/ButtonCircle';

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

    return (
        <div>
            <h1>Default Buttons</h1>
            <div className='buttons-container'>
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

            <h1>Small Buttons</h1>
            <div className='buttons-container'>
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

            <h1>Circle Buttons</h1>
            <div className='buttons-container'>
                <ButtonCircle
                    icon={closeIcon('#666666')}
                />
                <ButtonCircle
                    icon={closeIcon('#666666')}
                />
            </div>
        </div>
    )
}

export default ButtonsPage