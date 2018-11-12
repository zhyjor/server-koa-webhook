/**
 * 运行单个测试文件
 */

function runWebhook() {
  const execa = require("execa");
  const Listr = require("listr");

  const tasks = new Listr([
    {
      title: "Git",
      task: () => {
        return new Listr([
          {
            title: "Open dir",
            task: () => execa.shell("sh test.sh")
          }
        ]);
      }
    }
  ]);

  tasks.run().catch(err => {
    console.error(err);
  });
}

module.exports = runWebhook;
