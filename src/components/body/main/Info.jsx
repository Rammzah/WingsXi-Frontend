import React from "react";
import "../../../assets/css/info.css";

const Info = () => {
  return (
    <div>
      <h2>
        <b>Server Information</b>
      </h2>
      <p>
        This is a basic run-down of our server settings, as well as a brief
        explanation to any custom changes made to the server that deviate from
        normal era. You may find additional answers to questions in our FAQ,
        otherwise ask in our{" "}
        <a
          href="https://discord.com/channels/787521272522473483/853672060004860016/853680574522064906"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord.
        </a>
        .
      </p>
      <p>
        <i>
          Please keep in mind that while we tend to try and stick to what all
          was contained in patches that predate March 23rd, 2010, we may choose
          to include things from beyond this date at our (the server staffs)
          discretion.
        </i>
      </p>
      <div>
        <div>
          <b>Level Cap: 75.</b>
        </div>
        <div>
          <b>Expansion Era:</b> Wings of the Goddess.
        </div>
        <div>
          <b>Cutoff Date:</b> While March 23rd, 2010 is the last official Wings
          of the Goddess pre-Abyssea patch, we may selectively add balance
          changes or quality of life updates that postdate this patch.
        </div>
        <div>
          <b>Movement Speed:</b> 40.
        </div>
        <div>
          <b>Crafting Rates:</b> 1.0.
        </div>
        <div>
          <b>Skillup Rates:</b> 1.0.
        </div>
        <div>
          <b>Experience Rates:</b> 1.0. Wings of the Goddess enhanced Signet is
          also available.
        </div>
        <div>
          <b>Dual Boxing:</b> Not allowed. 1 character logged in per IP,
          enforced by the server's software.
        </div>
        <div>
          <b>Fields of Valor:</b> Enabled, one repeatable once per Vanadiel day
          (roughly 1 Earth hour.)
        </div>
        <div>
          <b>Wardrobes/Sack:</b> Unlocked with mission progress. (Nation,
          Zilart, CoP, and ToAU for Wardrobes; WotG for Sack)
        </div>
        <div>
          <b>Auction House:</b> Player stocked. 30 days lifespan for listings.
        </div>
        <div>
          <b>Outpost Warps:</b> Enabled. Can only warp with gil, conquest points
          are not able to be used.
        </div>
        <div>
          <b>Instant Re-raise / Instant Warp:</b> Original, higher CP cost.
        </div>
        <div>
          <b>Addon Scenarios:</b> A Crystalline Prophecy is enabled. The rest
          will probably be added later in server's life.
        </div>
        <div>
          <b>Gardening:</b> Enabled.
        </div>
        <div>
          <b>Crafting Myth:</b> Removed.
        </div>
      </div>
      <br />
      <h2>
        <b>Customized or intentionally Out of Era Features</b>
      </h2>
      <br />
      <div>
        <b>Yell:</b> Enabled globally on a 15 minute cooldown.
      </div>
      <div>
        <b>Linkshell Concierge:</b> Enabled. The Linkshell Concierge NPCs are
        NPCs that will allow recruiting linkshells (aka guilds) and new players
        to meet. Linkshell owners can speak to these NPCs and add linkpearls to
        them to hand out, and new players can use these NPCs to browse and join
        a new guild. If you're just starting out and want some new friends, try
        out the Linkshell Concierge! See this page to find your nearest
        Linkshell Concierge.
      </div>
      <div>
        <b>Maps:</b> Characters automatically start with all maps unlocked.
      </div>
      <div>
        <b>Chocobo Quest:</b> Current retail wait times (1 real-life minute
        between feeding the chocobo for Chocobo's Wounds quest).
      </div>
      <div>
        <b>Dynamis Lockout:</b> 71 Hours. (Changed from era's 72 hour lockout.)
      </div>
      <div>
        <b>??? Respawns:</b> 5 Minutes.
      </div>
      <div>
        <b>HNMs:</b> Ground kings (wyrms, adamantoise, and behemoth) will be
        spawned using spawned items gained from KSNM99 battles with their
        corresponding NQ versions. All other NMs will remain in their normal
        spawn locations.
      </div>
      <div>
        <b>RMT Changes</b>: RMT changes have been reverted and moved to their
        original locations for the following items. This means no versions of
        the following drop from corresponding battlefiends.
      </div>
      <br />
      <ul>
        <li>Cross-Counters (Western Shadow)</li>
        <li>Eurytos’s Bow (Eastern Shadow)</li>
        <li>Leaping Boots (Leaping Lizzy)</li>
        <li>Ochiudo’s Kote (Mee Deggi the Punisher)</li>
        <li>Fuma Kyahan (Quu Domi the Gallant)</li>
        <li>Peacock Charm (Argus)</li>
        <li>Speed Belt (King Arthro)</li>
        <li>Healing Staff (Roc)</li>
        <li>Strider Boots (Simurgh)</li>
        <li>Archer’s Ring (Stroper Chyme)</li>
        <li>Kraken Club (Lord of Onzozo)</li>
        <li>Astral Ring (Coffer chests in Castle of Oztroja)</li>
        <li>Emperor's Hairpin (Valkurm Emperor)</li>
      </ul>

      <div>
        <b>Loot:</b> Chests and Coffers are instant repops to allow access to
        quest items for players. Players who open coffers or chests for loot
        will incur a 30-minute zone-wide illusion timer that will not allow them
        to open another coffer or chest to gain loot until the illusion timer
        wears off.
      </div>
      <div>
        <b>Beastmaster:</b> All high quality versions of Beastmaster jug pets
        have had their level cap raised to level 75. Normal quality versions
        retain their normal level caps.
      </div>
      <div>
        <b>Crossbow Bolts / Wooden Arrow:</b> All jobs are able to equip,
        primarily for THF's benefit since it has no low level Marksmanship ammo.
      </div>
      <div>
        <b>
          Dancer has been given Dual Wield at its appropriate levels to help
          stay themeatic with the job.
        </b>
      </div>
      <div>
        <b>
          Dancer Spectral Jig has increased duration, currently using retail's
          duration length.
        </b>
      </div>
      <div>
        <b>Warp Cudgel has had its cooldown set to 1 hour.</b>
      </div>
    </div>
  );
};

export default Info;
