const fs = require('fs');
const path = require('path');
const target = path.join(__dirname, '..', '.next');
function rmdirForce(dir) {
  if (!fs.existsSync(dir)) return;
  try {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log('removed', dir);
  } catch (e) {
    console.error('rmSync failed:', e && e.message);
    try {
      // try unlinking trace specifically
      const trace = path.join(dir, 'trace');
      if (fs.existsSync(trace)) {
        try { fs.chmodSync(trace, 0o666); } catch(e){}
        try { fs.unlinkSync(trace); console.log('unlinked trace'); } catch(e){ console.error('unlink trace failed', e && e.message); }
      }
      fs.rmSync(dir, { recursive: true, force: true });
      console.log('removed after unlink', dir);
    } catch (e2) {
      console.error('final removal failed:', e2 && e2.message);
      process.exit(1);
    }
  }
}

rmdirForce(target);
