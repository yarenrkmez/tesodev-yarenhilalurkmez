/** Dependencies */
import React from 'react'
import { ButtonText } from '../../assets/constants/ButtonText';
import SettingsIcon from '../../assets/icons/components/SettingsIcon';
import Button from '../../components/Button/Button';

/** Style */
import '../ButtonsPage/Buttons.scss';

/** Icons */

type Props = {}

const ButtonsPage = (props: Props) => {

    const settingsIcon = () => {
        return (
            <div className="settings-icon">
                <SettingsIcon />
            </div>


        )
    }

    return (
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



    )
}

export default ButtonsPage