// @ts-check

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const ROOT_ENV_FILE_NAME = ".env.shared";
const SOURCE_ENV = path.join(ROOT, ROOT_ENV_FILE_NAME);

// 안에 있는 디렉토리만 가져오는 함수
/**
 * @param {string} srcPath
 * @returns {string[]}
 */
function getDirectories(srcPath) {
    return fs
        .readdirSync(srcPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => path.join(srcPath, dirent.name));
}

function syncEnvToTargets() {
  const appsDir = path.join(ROOT, "apps");
  const packagesDir = path.join(ROOT, "packages");

  const targets = [];
   
  // apps/* 존재하면 추가
  if (fs.existsSync(appsDir)) {
    targets.push(...getDirectories(appsDir));
  }

  // packages/* 존재하면 추가
  if (fs.existsSync(packagesDir)) {
    targets.push(...getDirectories(packagesDir));
  }

  // 대상 폴더들의 .env에 root/${ROOT_ENV_FILE_NAME} 복사
  targets.forEach((targetDir) => {
    const targetEnvPath = path.join(targetDir, '.env');
    fs.copyFileSync(SOURCE_ENV, targetEnvPath);
    console.log(`[env] Copied ${ROOT_ENV_FILE_NAME} → ${targetEnvPath}`);
  });

  console.log(`\n✨ Sync complete! Synced to ${targets.length} directories.`);
  console.log('\n =============================== \n');
}

syncEnvToTargets();
