import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer, owner } = await getNamedAccounts();
  const tokenArtifact = await deployments.getArtifact('Rankify');
  const result = await deploy('Rankify', {
    contract: tokenArtifact,
    from: deployer,
    args: [owner],
    skipIfAlreadyDeployed: true,
  });

  console.log(`Deployed Rankify to: ${result.address}`);
};

export default func;
func.tags = ['rankify'];
